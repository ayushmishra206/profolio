import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const GOOGLE_DOC_ID = '1IvrdXyAMyVwRIprCViROXEEkI5x98SvRNirkh1NGaQY';

export default function ResumeSection() {
  const handleDownloadResume = async () => {
    try {
      // Replace GOOGLE_DOC_ID with your actual Google Doc ID
      const googleDocsUrl = `https://docs.google.com/document/d/${GOOGLE_DOC_ID}/export?format=pdf`;
      
      const response = await fetch(googleDocsUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Ayush-Resume.pdf'; // Customize filename

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Success!",
        description: "Resume downloaded successfully.",
      });
    } catch (error) {
      console.error('Download failed:', error);
      toast({
        title: "Download Failed",
        description: "Unable to download resume. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "50+", label: "Contributions" },
    { value: "7+", label: "Major Projects" },
    { value: "15%", label: "Efficiency Gain" },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4">
            Download My <span className="text-blue-200">Resume</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a comprehensive overview of my experience, skills, and achievements 
            in a professional PDF format.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleDownloadResume}
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 font-semibold px-8 py-4 shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-3 w-5 h-5" />
              Download PDF Resume
            </Button>
            <div className="flex items-center text-blue-100 text-sm">
              <FileText className="mr-2 w-4 h-4" />
              <span>Last updated: May 2025</span>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-blue-100">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
