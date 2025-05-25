import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      console.log('Received contact data:', req.body);
      const contactData = insertContactSchema.parse(req.body);
      console.log('Validated contact data:', contactData);
      
      await storage.createContact(contactData);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        details: error instanceof Error ? error.toString() : undefined
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
