import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { NotificationModal } from './components/NotificationModal';
import { useViewCounter } from './hooks/useViewCounter';
import { useVisitNotification } from './hooks/useVisitNotification';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  
  // Real-time View Counter
  const { pageViews, getProjectViews, incrementProjectView } = useViewCounter();
  
  // Automated Visitor Alert on Page Land
  const { sendTestNotification } = useVisitNotification();

  return (
    <div className="relative min-h-screen bg-dark-bg text-dark-text overflow-x-hidden selection:bg-electric-violet/30 selection:text-white">
      {/* Dynamic Animated Canvas & Ambient Glows */}
      <BackgroundCanvas />

      {/* Navigation Header with Live View Counter & Alerts Trigger */}
      <Navbar 
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenNotificationModal={() => setIsNotificationModalOpen(true)}
        pageViews={pageViews}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero 
          onOpenResumeModal={() => setIsResumeModalOpen(true)} 
          pageViews={pageViews}
        />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section with Project Views */}
        <Projects 
          getProjectViews={getProjectViews}
          incrementProjectView={incrementProjectView}
        />

        {/* Experience & Leadership Section */}
        <Experience />

        {/* Achievements & Interests Section */}
        <Achievements />

        {/* Contact Section with API Key Form Dispatch */}
        <Contact onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Dialog / Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Visitor Notification Dialog / Modal */}
      <NotificationModal
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
        onSendTestNotification={sendTestNotification}
      />
    </div>
  );
};

export default App;
