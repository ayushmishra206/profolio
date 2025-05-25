import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ResumeSection() {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    // In a real implementation, this would trigger the actual PDF download
    toast({
      title: "Resume Download",
      description: "Resume download functionality would be implemented here with the actual PDF file.",
    });
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
              <span>Last updated: January 2024</span>
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
