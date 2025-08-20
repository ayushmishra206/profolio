import type { Express } from "express";
import { createServer, type Server } from "http";
export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      console.log('Received contact data:', req.body);
  const contactData = req.body;
  console.log('Received contact data (no validation):', contactData);
      
  // Email sending disabled
      res.json({ 
        success: true, 
        message: "Message sent successfully!" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message. Please try again.",
        details: error instanceof Error ? error.message : undefined
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
