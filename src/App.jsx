import React, { useState, useEffect } from 'react';
import { loadMarkdown } from './utils';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [markdownContent, setMarkdownContent] = useState({
    technical: '',
    market: '',
    strategy: ''
  });

  useEffect(() => {
    async function loadContent() {
      try {
        const [technical, market, strategy] = await Promise.all([
          loadMarkdown('/technical/adaptive_core_concept.md'),
          loadMarkdown('/research/market_analysis.md'),
          loadMarkdown('/research/strategic_innovation.md')
        ]);
        
        setMarkdownContent({
          technical,
          market,
          strategy
        });
      } catch (error) {
        console.error('Error loading content:', error);
      }
    }
    
    loadContent();
  }, []);

  const sectionStyle = (isActive) => ({
    padding: '10px 20px',
    backgroundColor: isActive ? '#1976d2' : 'transparent',
    color: isActive ? 'white' : '#1976d2',
    border: `1px solid ${isActive ? '#1976d2' : '#ddd'}`,
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '0 5px',
  });

  const renderOverview = () => (
    <div>
      <div style={{ 
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{ 
          color: '#1976d2',
          fontSize: '2.5em',
          marginBottom: '10px'
        }}>
          Bradley W. Merrill
        </h1>
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '1.1em', margin: '5px 0' }}>bwmengineer428@gmail.com</p>
          <a 
            href="https://github.com/Bradbuythedip"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1976d2', textDecoration: 'none' }}
          >
            github.com/Bradbuythedip
          </a>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.1em', marginBottom: '20px', color: '#444' }}>
          Dear Hiring Manager,
        </p>

        <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
          I am writing to express my strong interest in the Custom Solutions Engineer position at Fair-Rite Products Corp. 
          With over 10 years of experience in mechanical engineering, automation, and product development, combined with 
          my recent work in high-power electronics at Nuvera Fuel Cells, I am excited about the opportunity to contribute 
          to Fair-Rite's innovative ferrite solutions.
        </p>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Technical Expertise:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
              <span style={{ 
                position: 'absolute', 
                left: 0, 
                color: '#1976d2',
                fontWeight: 'bold' 
              }}>•</span>
              Led research on insulation resistance and Dielectric Withstand Voltage at Nuvera Fuel Cells
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
              <span style={{ 
                position: 'absolute', 
                left: 0, 
                color: '#1976d2',
                fontWeight: 'bold' 
              }}>•</span>
              Extensive experience with CAD software and manufacturing processes
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
              <span style={{ 
                position: 'absolute', 
                left: 0, 
                color: '#1976d2',
                fontWeight: 'bold' 
              }}>•</span>
              Strong background in process optimization and quality control
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#1976d2', marginBottom: '15px' }}>Opportunities at Fair-Rite:</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ 
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <h4 style={{ color: '#1976d2', marginBottom: '10px' }}>Emerging Markets</h4>
              <p>Growth potential in electric vehicle charging and wireless power transfer markets</p>
            </div>
            <div style={{ 
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <h4 style={{ color: '#1976d2', marginBottom: '10px' }}>Manufacturing Evolution</h4>
              <p>Innovation in additive manufacturing for complex ferrite geometries</p>
            </div>
            <div style={{ 
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <h4 style={{ color: '#1976d2', marginBottom: '10px' }}>Technical Leadership</h4>
              <p>Guide customers to optimal solutions in modern electronics applications</p>
            </div>
          </div>
        </div>

        <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
          I recently researched the potential of binder jet technology for ferrite manufacturing, and I see exciting 
          possibilities for Fair-Rite to lead innovation in this space. I would welcome the opportunity to discuss 
          how my experience and ideas could contribute to Fair-Rite's continued success.
        </p>

        <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
          Thank you for considering my application. I look forward to discussing how I can contribute to Fair-Rite's team.
        </p>

        <p style={{ marginTop: '30px' }}>
          Best regards,<br />
          Bradley W. Merrill
        </p>
      </div>
    </div>
  );

  const renderMarkdown = (content) => (
    <div 
      style={{ padding: '20px' }}
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <nav style={{
        backgroundColor: 'white',
        padding: '20px',
        marginBottom: '30px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'technical', label: 'Technical Details' },
            { id: 'market', label: 'Market Analysis' },
            { id: 'strategy', label: 'Strategy' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              style={sectionStyle(activeSection === section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '40px',
          marginBottom: '2rem'
        }}>
          {activeSection === 'overview' && renderOverview()}
          {activeSection === 'technical' && renderMarkdown(markdownContent.technical)}
          {activeSection === 'market' && renderMarkdown(markdownContent.market)}
          {activeSection === 'strategy' && renderMarkdown(markdownContent.strategy)}
        </div>
      </main>
    </div>
  );
}

export default App;