import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getEmailStats, getPendingEmails, sendBatchEmails, sendAllEmails } from '../utils/api';
import toast from 'react-hot-toast';
import './EmailManagement.css';

const EmailManagement = ({ user }) => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [pendingEmails, setPendingEmails] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [showResults, setShowResults] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    fetchData();
  }, [user, navigate]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [statsData, pendingData] = await Promise.all([
        getEmailStats(),
        getPendingEmails(100, 0)
      ]);
      
      setStats(statsData.stats);
      setPendingEmails(pendingData.inquiries || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response?.status === 403) {
        toast.error('⚠️ Batch emails only work in LOCAL/DEVELOPMENT environment!');
      } else {
        toast.error('Failed to load email data');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectAll = () => {
    if (selectedIds.length === pendingEmails.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(pendingEmails.map(email => email._id));
    }
  };

  const handleSelectOne = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(sid => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleDryRun = async () => {
    try {
      setIsSending(true);
      const result = await sendAllEmails(true);
      
      toast.success(`📋 Dry Run: Would send ${result.totalToSend} emails`);
      setShowResults(result);
    } catch (error) {
      console.error('Error in dry run:', error);
      toast.error(error.response?.data?.message || 'Dry run failed');
    } finally {
      setIsSending(false);
    }
  };

  const handleSendSelected = async () => {
    if (selectedIds.length === 0) {
      toast.error('Please select at least one email to send');
      return;
    }

    const confirmed = window.confirm(
      `Send enrollment emails to ${selectedIds.length} selected student(s)?\n\n` +
      `This cannot be undone.`
    );
    
    if (!confirmed) return;

    try {
      setIsSending(true);
      const result = await sendBatchEmails(selectedIds);
      
      toast.success(`✅ ${result.message}`);
      setShowResults(result.results);
      setSelectedIds([]);
      
      // Refresh data
      await fetchData();
    } catch (error) {
      console.error('Error sending batch:', error);
      toast.error(error.response?.data?.message || 'Failed to send batch emails');
    } finally {
      setIsSending(false);
    }
  };

  const handleSendAll = async () => {
    if (!stats || stats.emailsPending === 0) {
      toast.error('No pending emails to send');
      return;
    }

    const confirmed = window.confirm(
      `Send enrollment emails to ALL ${stats.emailsPending} pending students?\n\n` +
      `This cannot be undone.`
    );
    
    if (!confirmed) return;

    try {
      setIsSending(true);
      const result = await sendAllEmails(false);
      
      toast.success(`✅ ${result.message}`);
      setShowResults(result.results);
      
      // Refresh data
      await fetchData();
    } catch (error) {
      console.error('Error sending all:', error);
      toast.error(error.response?.data?.message || 'Failed to send all emails');
    } finally {
      setIsSending(false);
    }
  };

  if (isLoading) {
    return (
      <div className="email-management-loading">
        <div className="loader"></div>
        <p>Loading email data...</p>
      </div>
    );
  }

  return (
    <div className="email-management">
      <div className="container">
        <div className="page-header">
          <div>
            <h1 className="page-title">📧 Email Management</h1>
            <p className="page-subtitle">Send enrollment emails to students (LOCAL ONLY)</p>
          </div>
          <Link to="/dashboard" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </Link>
        </div>

        {/* Warning Banner */}
        <div className="warning-banner">
          <i className="fas fa-exclamation-triangle"></i>
          <div>
            <strong>LOCAL ENVIRONMENT ONLY</strong>
            <p>Batch email features only work in development. Production requests will be blocked.</p>
          </div>
        </div>

        {/* Statistics Cards */}
        {stats && (
          <div className="stats-grid">
            <div className="stat-card total">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-content">
                <h3>{stats.totalEnrolledStudents}</h3>
                <p>Total Enrolled</p>
              </div>
            </div>

            <div className="stat-card sent">
              <div className="stat-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="stat-content">
                <h3>{stats.emailsSent}</h3>
                <p>Emails Sent</p>
              </div>
            </div>

            <div className="stat-card pending">
              <div className="stat-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="stat-content">
                <h3>{stats.emailsPending}</h3>
                <p>Pending Emails</p>
              </div>
            </div>

            <div className="stat-card rate">
              <div className="stat-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="stat-content">
                <h3>{stats.successRate || '0%'}</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="action-section">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <button 
              onClick={handleDryRun} 
              className="btn btn-outline"
              disabled={isSending || !stats || stats.emailsPending === 0}
            >
              <i className="fas fa-eye"></i>
              Preview (Dry Run)
            </button>
            
            <button 
              onClick={handleSendSelected}
              className="btn btn-primary"
              disabled={isSending || selectedIds.length === 0}
            >
              <i className="fas fa-paper-plane"></i>
              Send Selected ({selectedIds.length})
            </button>
            
            <button 
              onClick={handleSendAll}
              className="btn btn-danger"
              disabled={isSending || !stats || stats.emailsPending === 0}
            >
              <i className="fas fa-rocket"></i>
              Send All ({stats?.emailsPending || 0})
            </button>

            <button 
              onClick={fetchData}
              className="btn btn-secondary"
              disabled={isSending}
            >
              <i className="fas fa-sync-alt"></i>
              Refresh
            </button>
          </div>
        </div>

        {/* Results Display */}
        {showResults && (
          <div className="results-section">
            <h3>
              {showResults.dryRun ? '📋 Dry Run Results' : '✅ Email Results'}
            </h3>
            
            <div className="results-summary">
              {showResults.dryRun ? (
                <p className="dry-run-message">
                  Would send <strong>{showResults.totalToSend}</strong> emails
                </p>
              ) : (
                <div className="result-stats">
                  <span className="result-success">
                    <i className="fas fa-check"></i> Sent: {showResults.sent?.length || 0}
                  </span>
                  <span className="result-failed">
                    <i className="fas fa-times"></i> Failed: {showResults.failed?.length || 0}
                  </span>
                  <span className="result-skipped">
                    <i className="fas fa-minus-circle"></i> Already Sent: {showResults.alreadySent?.length || 0}
                  </span>
                </div>
              )}
            </div>

            {(showResults.sent?.length > 0 || showResults.recipients?.length > 0) && (
              <div className="results-details">
                <h4>Recipients:</h4>
                <div className="recipient-list">
                  {(showResults.recipients || showResults.sent)?.slice(0, 10).map((recipient, index) => (
                    <div key={index} className="recipient-item">
                      <i className="fas fa-envelope"></i>
                      <span className="recipient-name">{recipient.name}</span>
                      <span className="recipient-email">{recipient.email}</span>
                      <span className="recipient-course">{recipient.course}</span>
                    </div>
                  ))}
                  {(showResults.recipients || showResults.sent)?.length > 10 && (
                    <p className="more-results">
                      ...and {(showResults.recipients || showResults.sent).length - 10} more
                    </p>
                  )}
                </div>
              </div>
            )}

            {showResults.failed?.length > 0 && (
              <div className="results-details failed-section">
                <h4>Failed:</h4>
                <div className="recipient-list">
                  {showResults.failed.map((recipient, index) => (
                    <div key={index} className="recipient-item error">
                      <i className="fas fa-exclamation-circle"></i>
                      <span className="recipient-name">{recipient.name}</span>
                      <span className="recipient-email">{recipient.email}</span>
                      <span className="error-message">{recipient.error}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button onClick={() => setShowResults(null)} className="btn btn-outline btn-sm">
              Close Results
            </button>
          </div>
        )}

        {/* Pending Emails Table */}
        <div className="pending-section">
          <div className="section-header">
            <h3>Pending Emails ({pendingEmails.length})</h3>
            {pendingEmails.length > 0 && (
              <label className="select-all">
                <input
                  type="checkbox"
                  checked={selectedIds.length === pendingEmails.length}
                  onChange={handleSelectAll}
                />
                Select All
              </label>
            )}
          </div>

          {pendingEmails.length === 0 ? (
            <div className="no-pending">
              <i className="fas fa-check-circle"></i>
              <p>No pending emails! All enrolled students have received their confirmation.</p>
            </div>
          ) : (
            <div className="pending-table-container">
              <table className="pending-table">
                <thead>
                  <tr>
                    <th width="50">
                      <input
                        type="checkbox"
                        checked={selectedIds.length === pendingEmails.length}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Organization</th>
                    <th>Enrolled Date</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingEmails.map((email) => (
                    <tr key={email._id} className={selectedIds.includes(email._id) ? 'selected' : ''}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(email._id)}
                          onChange={() => handleSelectOne(email._id)}
                        />
                      </td>
                      <td>{email.name}</td>
                      <td>{email.email}</td>
                      <td>{email.courseName}</td>
                      <td>{email.organization}</td>
                      <td>{new Date(email.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailManagement;
