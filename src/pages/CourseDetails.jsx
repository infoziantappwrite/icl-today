import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCourseById } from '../utils/api';
import toast from 'react-hot-toast';
import InquiryModal from '../components/InquiryModal';
import './CourseDetails.css'; // Make sure to create this CSS file next

const CourseDetails = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getCourseById(id);
        setCourse(data);
        
        // Check if user is enrolled
        if (user && user.courses) {
          setIsEnrolled(user.courses.includes(id));
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch course details:', error);
        toast.error('Failed to load course details. Please try again later.');
        setIsLoading(false);
      }
    };
    
    fetchCourseDetails();
  }, [id, user]);
  
  const handleEnrollment = () => {
    setShowInquiryModal(true);
  };
  
  const handleEnrollmentSuccess = (inquiry) => {
    toast.success(`Successfully enrolled in ${inquiry.courseName}!`);
    // If you want to show some indicator that they've enrolled
    setIsEnrolled(true);
  };
  
  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-spinner fa-spin"></i> Loading course details...
      </div>
    );
  }
  
  if (!course) {
    return <div className="not-found">Course not found</div>;
  }
  
  return (
    <div className="course-details-page">
      <div className="container">
        {/* Mobile Course Header - Only visible on small screens */}
        <div className="mobile-course-header">
          <div className="course-sidebar-price">₹{course.price}</div>
          {isEnrolled ? (
            <button className="btn btn-success enroll-button" disabled>
              Already Enrolled
            </button>
          ) : (
            <button className="btn btn-primary enroll-button" onClick={handleEnrollment}>
              Enroll Now
            </button>
          )}
        </div>
        
        {/* Course Details */}
        <div className="course-details">
          <div className="course-details-main">
            <h1 className="course-details-title">🚀 {course.title}</h1>
            <h3 className="course-details-meta">{course.subtitle}</h3>
            
            <div className="course-details-meta">
              <div>
                <i className="fas fa-user"></i> Instructor: {course.instructor}
              </div>
              <div>
                <i className="fas fa-signal"></i> Level: {course.level}
              </div>
              <div>
                <i className="fas fa-clock"></i> Duration: {course.duration}
              </div>
              <div>
                <i className="fas fa-users"></i> Students: {course.enrollmentCount || 0}
              </div>
            </div>
            
            <img 
              src={course.image} 
              alt={course.title}
              className="course-details-image"
            />
            
            {/* Course Tabs */}
            <div className="course-tabs">
              <div className="tabs-header">
                <button 
                  className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
                  onClick={() => setActiveTab('curriculum')}
                >
                  Curriculum
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'instructor' ? 'active' : ''}`}
                  onClick={() => setActiveTab('instructor')}
                >
                  Instructor
                </button>
              </div>
              
              <div className="tabs-content">
                {activeTab === 'overview' && (
                  <div className="tab-pane">
                    <h3>Course Description</h3>
                    <p className="course-details-description" dangerouslySetInnerHTML={{ __html: course.description }}></p>
                    
                    <h3>🧠 Core Skills You'll Learn</h3>
                    <ul className="topics-list">
                      {course.topics.map((topic, index) => (
                        <li key={index}>
                          <i className="fas fa-square-check"></i> {topic}
                        </li>
                      ))}
                    </ul>
                    
                    {
                      (course.benefits && course.benefits.length > 0) && (
                        <>
                          <h3>🎓 Benefits</h3>
                          <ul className="topics-list">
                            {course.benefits.map((benefit, index) => (
                              <li key={index}>
                                <i className="fa fa-star fa-filled"></i> {benefit}
                              </li>
                            ))}
                          </ul>
                        </>
                      )
                    }
                    

                  </div>
                )}
                
                {activeTab === 'curriculum' && (
                  <div className="tab-pane">
                    <h3>Course Curriculum</h3>
                    {course.curriculum && course.curriculum.length > 0 ? (
                      course.curriculum.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="curriculum-section">
                          <h4 className="section-title">
                            {section.title}
                          </h4>
                          <ul className="lessons-list">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="lesson-item">
                                <div className="lesson-info">
                                  <span className="lesson-title">
                                    <i className="fas fa-play-circle"></i> {lesson.title}
                                  </span>
                                  <span className="lesson-duration">{lesson.duration}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <p>You will be notified with complete details regarding the start of your program.</p>
                    )}
                  </div>
                )}
                
                {activeTab === 'instructor' && (
                  <div className="tab-pane">
                    <h3>About the Instructor</h3>
                    <div className="instructor-profile">
                      <div className="instructor-image">
                        <img src={`https://i.graphicmama.com/uploads/2017/12/5a2658fe73cef-clark-executive.png`} alt={course.instructor} />
                      </div>
                      <div className="instructor-info">
                        <h4>{course.instructor}</h4>
                        <p>
                          Experienced instructor with expertise in {course.topics.slice(0, 2).join(', ')}, 
                          and other related technologies. Passionate about teaching and helping 
                          students master complex concepts through practical examples.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Course Sidebar */}
          <div className="course-sidebar">
            <div className="course-sidebar-price">₹{course.price}</div>
            
            <div className="course-features">
              <div className="course-feature">
                <i className="fas fa-play-circle"></i>
                <span>Full lifetime access</span>
              </div>
              <div className="course-feature">
                <i className="fas fa-mobile-alt"></i>
                <span>Access on mobile and desktop</span>
              </div>
              <div className="course-feature">
                <i className="fas fa-certificate"></i>
                <span>Certificate of completion</span>
              </div>
              <div className="course-feature">
                <i className="fas fa-comments"></i>
                <span>Instructor support</span>
              </div>
            </div>
            
            {isEnrolled ? (
              <button className="btn btn-success enroll-button" disabled>
                Already Enrolled
              </button>
            ) : (
              <button className="btn btn-primary enroll-button" onClick={handleEnrollment}>
                Enroll Now
              </button>
            )}
            
            <div className="money-back">
              <i className="fas fa-shield-alt"></i>
              <span>Live sessions with on-demand WhatsApp guidance</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Inquiry Modal */}
      {showInquiryModal && course && (
        <InquiryModal 
          isOpen={showInquiryModal} 
          onClose={() => setShowInquiryModal(false)}
          course={course}
          onEnrollmentSuccess={handleEnrollmentSuccess}
        />
      )}
    </div>
  );
};

export default CourseDetails;