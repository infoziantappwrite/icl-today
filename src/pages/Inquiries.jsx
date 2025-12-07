import { useState, useEffect } from 'react';
import { getInquiry } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import './Inquiries.css';

const Inquiries = ({ user }) => {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [filters, setFilters] = useState({
    status: '',
    collegeName: '',
    paymentStatus: '',
    dateRange: {
      start: '',
      end: ''
    }
  });
  const [filteredInquiries, setFilteredInquiries] = useState([]);

  useEffect(() => {
    if (!Array.isArray(inquiries)) return;
    
    let filtered = [...inquiries];

    // Filter by status
    if (filters.status) {
      filtered = filtered.filter(item => item.status === filters.status);
    }

    // Filter by payment status
    if (filters.paymentStatus) {
      filtered = filtered.filter(item => item.paymentStatus === filters.paymentStatus);
    }

    // Filter by college name
    if (filters.collegeName) {
      filtered = filtered.filter(item => 
        item.organization?.toLowerCase().includes(filters.collegeName.toLowerCase())
      );
    }

    if (filters.courseName) {
      filtered = filtered.filter(item => 
        item.courseName?.toLowerCase().includes(filters.courseName.toLowerCase())
      );
    }

    if (filters.dateRange.start || filters.dateRange.end) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.createdAt);
        const start = filters.dateRange.start ? new Date(filters.dateRange.start) : null;
        const end = filters.dateRange.end ? new Date(filters.dateRange.end) : null;

        if (start && end) {
          return itemDate >= start && itemDate <= end;
        } else if (start) {
          return itemDate >= start;
        } else if (end) {
          return itemDate <= end;
        }
        return true;
      });
    }

    setFilteredInquiries(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [inquiries, filters]); 

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateRangeChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      dateRange: {
        ...prev.dateRange,
        [name]: value
      }
    }));
  };

  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredInquiries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredInquiries.length / itemsPerPage);


  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        setIsLoading(true);
        const inquiriesData = await getInquiry();
        setInquiries(inquiriesData);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch inquiries:', error);
        toast.error('Failed to fetch inquiries. Please try a`gain later.');
        setIsLoading(false);
      }
    };  

    if (user) {
      fetchInquiries();
    } else {
      navigate('/login');
    }
  }, [user, navigate]);

  if (isLoading) {
    return <div className="loading-container">
      <div className="loading">
        <i className="fas fa-spinner fa-spin"></i> Loading inquiries...
      </div>
    </div>;
  }
  
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const isPaymentPending = (status) => {
    return status === 'pending';
  };
  
  // Pagination logic

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Prepare data for export
  const prepareExportData = () => {
    if (!Array.isArray(inquiries) || inquiries.length === 0) {
      toast.error('No data to export');
      return null;
    }
    
    return inquiries.map(inquiry => ({
      'Date & Time': formatDate(inquiry.createdAt),
      'Name': inquiry.name || 'N/A',
      'Email': inquiry.email || 'N/A',
      'Phone': inquiry.phone || 'N/A',
      'Course Name': inquiry.courseName || 'N/A',
      'Organization': inquiry.organization || 'N/A',
      'Degree': inquiry.degree || 'N/A',
      'Department': inquiry.department || 'N/A',
      'Year': inquiry.year || 'N/A',

      'Status': inquiry.status || 'N/A',
      'Payment Status': inquiry.paymentStatus || 'N/A',
      'Payment ID': inquiry.razorpayPaymentId || 'N/A'
    }));
  };
  
  // Export to CSV
  const exportToCSV = () => {
    try {
      const dataToExport = prepareExportData();
      if (!dataToExport) return;
      
      // Use PapaParse to convert to CSV
      const csv = Papa.unparse(dataToExport, {
        quotes: true, // Use quotes around all fields
        header: true // Include header row
      });
      
      // Create download link
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `inquiries_export_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('CSV export successful');
    } catch (error) {
      console.error('CSV export failed:', error);
      toast.error('CSV export failed. Please try again.');
    }
  };
  
  // Export to Excel (XLSX)
  const exportToExcel = () => {
    try {
      const dataToExport = prepareExportData();
      if (!dataToExport) return;
      
      // Create worksheet
      const worksheet = XLSX.utils.json_to_sheet(dataToExport);
      
      // Create workbook
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Inquiries');
      
      // Generate Excel file and trigger download
      XLSX.writeFile(workbook, `inquiries_export_${new Date().toISOString().split('T')[0]}.xlsx`);
      
      toast.success('Excel export successful');
    } catch (error) {
      console.error('Excel export failed:', error);
      toast.error('Excel export failed. Please try again.');
    }
  };

  return (
    <div className="inquiries-page">
      <div className="container">

        <div className="page-header">
          <h1 className="page-title">Inquiries</h1>
          {Array.isArray(inquiries) && inquiries.length > 0 && (
            <div className="export-buttons">
              <button onClick={exportToCSV} className="export-button csv">
                <i className="fas fa-file-csv"></i> Export to CSV
              </button>
              <button onClick={exportToExcel} className="export-button excel">
                <i className="fas fa-file-excel"></i> Export to Excel
              </button>
            </div>
          )}
        </div>

        <div className="filters-section">
          <div className="filters-grid">
            <div className="filter-group">
              <label>Status:</label>
              <select 
                name="status" 
                value={filters.status}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="pending">Pending</option>
                <option value="enrolled">Enrolled</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Payment Status:</label>
              <select 
                name="paymentStatus" 
                value={filters.paymentStatus}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="failed">Failed</option>
              </select>
            </div>
        
            <div className="filter-group">
  <label>Organization/College:</label>
  <input      
    type="text"
    name="collegeName"
    value={filters.collegeName}
    onChange={handleFilterChange}
    placeholder="Search College..."
  />
</div>

<div className="filter-group">
              <label>Course Name:</label>
              <input
                type="text"
                name="courseName"
                value={filters.courseName}
                onChange={handleFilterChange}
                placeholder="Search course..."
              />
            </div>


            <div className="filter-group">
              <label>Date Range:</label>
              <div className="date-range-inputs">
                <input
                  type="date"
                  name="start"
                  value={filters.dateRange.start}
                  onChange={handleDateRangeChange}
                />
                
              </div>
            </div>
           
          </div>
        </div>
        {Array.isArray(inquiries) && inquiries.length > 0 ? (
          <>
            <div className="inquiry-table-container">
              <table className="inquiry-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date & Time</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Course Name</th>
                    <th>Organization</th>
                    <th>Degree</th>
                    <th>Department</th>
                    <th>Year</th>
                    <th>Status</th>
                    <th>Payment Status</th>
                    <th>Payment ID</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((inquiry) => (
                    <tr key={inquiry.id || inquiry._id}>
                      <td>{indexOfFirstItem + inquiries.indexOf(inquiry) + 1}</td>
                      <td>{formatDate(inquiry.createdAt)}</td>
                      <td>{inquiry.name}</td>
                      <td>{inquiry.email}</td>
                      <td>{inquiry.phone}</td>
                      <td>{inquiry.courseName}</td>
                      <td>{inquiry.organization}</td>
                      <td>{inquiry.degree}</td>
                      <td>{inquiry.department}</td>
                      <td>{inquiry.year}</td>
                      {/* Status and Payment Status with conditional classes */}
                      <td>
                        <span className={`status-badge ${inquiry.status}`}>
                          {inquiry.status}
                        </span>
                      </td>
                      <td>
                        <span className={`status-badge ${inquiry.paymentStatus}`}>
                          {inquiry.paymentStatus}
                        </span>
                      </td>
                      <td className="payment-id">
                        {inquiry.razorpayPaymentId ? 
                          inquiry.razorpayPaymentId.slice(0, 10) + '...' : 
                          'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button 
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="pagination-button"
                >
                  &laquo; Previous
                </button>
                
                <div className="page-numbers">
                  {[...Array(totalPages)].map((_, index) => {
                    // Show current page, first, last, and pages around current
                    const pageNumber = index + 1;
                    if (
                      pageNumber === 1 || 
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => paginate(pageNumber)}
                          className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
                        >
                          {pageNumber}
                        </button>
                      );
                    } else if (
                      (pageNumber === 2 && currentPage > 3) ||
                      (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return <span key={pageNumber} className="pagination-ellipsis">...</span>;
                    } else {
                      return null;
                    }
                  })}
                </div>
                
                <button 
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="pagination-button"
                >
                  Next &raquo;
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-inquiries">
            <p>No inquiries found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inquiries;

