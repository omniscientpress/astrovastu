"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  text: string;
  sender: "bot" | "user";
  type?: "text" | "options" | "summary";
  options?: string[];
  timestamp: Date;
};

type ServiceType = "muhurtham" | "career" | "marriage" | "childbirth" | "finance" | "health" | "prashna";

type ServiceConfig = {
  name: string;
  nameTe: string;
  fee: number;
  duration: string;
  steps: string[];
};

const services: Record<ServiceType, ServiceConfig> = {
  muhurtham: { name: "Muhurtham", nameTe: "ముహూర్తం", fee: 3000, duration: "30-45 min", steps: ["subType", "dob", "birthTime", "birthPlace", "details", "phone", "summary"] },
  career: { name: "Career Guidance", nameTe: "ఉద్యోగ మార్గదర్శకత్వం", fee: 2000, duration: "30-45 min", steps: ["dob", "birthTime", "birthPlace", "currentStatus", "question", "phone", "summary"] },
  marriage: { name: "Marriage & Relationships", nameTe: "వివాహం", fee: 3000, duration: "45-60 min", steps: ["subType", "dob", "birthTime", "birthPlace", "partnerDetails", "question", "phone", "summary"] },
  childbirth: { name: "Childbirth & Progeny", nameTe: "సంతానం", fee: 5000, duration: "45-60 min", steps: ["dob", "birthTime", "birthPlace", "marriageDate", "currentChildren", "question", "phone", "summary"] },
  finance: { name: "Finance & Property", nameTe: "ధనం & ఆస్తి", fee: 3000, duration: "30-45 min", steps: ["subType", "dob", "birthTime", "birthPlace", "currentStatus", "question", "phone", "summary"] },
  health: { name: "Health & Well-being", nameTe: "ఆరోగ్యం", fee: 2000, duration: "30 min", steps: ["subType", "dob", "birthTime", "birthPlace", "healthIssue", "phone", "summary"] },
  prashna: { name: "Horary / Prashna", nameTe: "ప్రశ్న శాస్త్రం", fee: 500, duration: "15 min", steps: ["prashnaNumber", "question", "dobOptional", "phone", "summary"] },
};

const serviceOptions = [
  { id: "muhurtham", label: "Muhurtham (ముహూర్తం) - Rs.3,000" },
  { id: "career", label: "Career & Education (ఉద్యోగం) - Rs.2,000" },
  { id: "marriage", label: "Marriage (వివాహం) - Rs.3,000" },
  { id: "childbirth", label: "Childbirth (సంతానం) - Rs.5,000" },
  { id: "finance", label: "Finance (ధనం) - Rs.3,000" },
  { id: "health", label: "Health (ఆరోగ్యం) - Rs.2,000" },
  { id: "prashna", label: "Horary/Prashna (ప్రశ్న) - Rs.500" },
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState("welcome");
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [clientData, setClientData] = useState<Record<string, string>>({});
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addMessage = (text: string, sender: "bot" | "user" = "bot", type?: Message["type"], options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString() + Math.random(),
      text,
      sender,
      type,
      options,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const startChat = () => {
    setMessages([]);
    setClientData({});
    setStepIndex(0);
    setCurrentStep("welcome");
    setSelectedService(null);
    setTimeout(() => {
      addMessage("🙏 నమస్కారం! Welcome to Divine Jyothi.\n\nI'm your astrology assistant. I'll help you book the right consultation and collect all necessary details.\n\nWhat is your name? (మీ పేరు ఏమిటి?)");
    }, 300);
  };

  const handleServiceSelect = (serviceId: ServiceType) => {
    setSelectedService(serviceId);
    setClientData((prev) => ({ ...prev, service: serviceId }));
    setStepIndex(0);
    const service = services[serviceId];
    const firstStep = service.steps[0];
    setTimeout(() => {
      if (firstStep === "subType") {
        addMessage(`You selected: ${service.name} (${service.nameTe})\n\nPlease select the specific type of consultation:`, "bot", "options", ["Childbirth Muhurtham", "Marriage Muhurtham", "Gruha Pravesham", "Vehicle Purchase", "Business Opening", "Namakaranam"]);
      } else if (firstStep === "prashnaNumber") {
        addMessage(`You selected: ${service.name} (${service.nameTe})\n\nFor Horary (Prashna), please give any number between 1 and 249:\n(1 నుండి 249 మధ్య ఏదైనా సంఖ్య ఇవ్వండి)`);
      } else {
        addMessage(`You selected: ${service.name} (${service.nameTe})\n\nFee: Rs.${service.fee} | Duration: ${service.duration}\n\nLet's start with your birth details.\n\n📅 Date of Birth? (DD/MM/YYYY)\nExample: 15/08/1990`);
      }
      setCurrentStep(firstStep);
    }, 500);
  };

  const processStep = (input: string) => {
    if (!selectedService) return;
    const service = services[selectedService];
    const steps = service.steps;
    const currentStepKey = steps[stepIndex];
    setClientData((prev) => ({ ...prev, [currentStepKey]: input }));
    const nextIndex = stepIndex + 1;
    setStepIndex(nextIndex);
    if (nextIndex >= steps.length) {
      showSummary();
      return;
    }
    const nextStep = steps[nextIndex];
    setCurrentStep(nextStep);
    setTimeout(() => {
      switch (nextStep) {
        case "birthTime": addMessage("⏰ Time of Birth? (24-hour or AM/PM)\nExample: 10:30 AM or 14:30"); break;
        case "birthPlace": addMessage("📍 Place of Birth? (City, State)\nExample: Vijayawada, Andhra Pradesh"); break;
        case "dob": addMessage("📅 Date of Birth? (DD/MM/YYYY)\nExample: 15/08/1990"); break;
        case "details": addMessage("📝 Please provide specific details about your Muhurtham requirements:\n- Preferred date range\n- Any constraints or preferences\n- Family members' availability"); break;
        case "currentStatus": addMessage("What is your current status?", "bot", "options", ["Student (విద్యార్థి)", "Working Professional (ఉద్యోగి)", "Looking for Job (ఉద్యోగం కోసం వెతుకుతున్నాను)", "Business Owner (వ్యాపారి)"]); break;
        case "question": addMessage("🎯 What is your specific question?\n(Be detailed for accurate KP analysis)"); break;
        case "partnerDetails": addMessage("Please provide your partner's details:\n\nPartner's Name:\nPartner's DOB (DD/MM/YYYY):\nPartner's Birth Time:\nPartner's Birth Place:"); break;
        case "marriageDate": addMessage("💑 Your marriage date? (DD/MM/YYYY)\nIf not married, enter expected/approximate date."); break;
        case "currentChildren": addMessage("👶 Current children count? (0 if none)"); break;
        case "healthIssue": addMessage("🏥 What health issue are you facing?\nPlease describe briefly."); break;
        case "prashnaNumber": addMessage("🔢 Give any number between 1-249:"); break;
        case "dobOptional": addMessage("📅 Your Date of Birth? (Optional but helps accuracy)\nType 'skip' if you don't have it."); break;
        case "phone": addMessage("📞 Your WhatsApp number for booking confirmation?\nExample: 9876543210"); break;
        case "summary": showSummary(); break;
        default: addMessage("Please provide the required information:");
      }
    }, 500);
  };

  const showSummary = () => {
    const service = selectedService ? services[selectedService] : null;
    if (!service) return;
    const summary = `✅ **Booking Summary**\n\n**Service:** ${service.name} (${service.nameTe})\n**Fee:** Rs.${service.fee}\n**Duration:** ${service.duration}\n\n**Your Details:**\n${Object.entries(clientData).filter(([key]) => key !== "service").map(([key, value]) => `• ${key}: ${value}`).join('\n')}\n\nClick below to proceed to payment:`;
    addMessage(summary, "bot", "summary");
  };

  const handleUserInput = (input: string) => {
    if (!input.trim()) return;
    addMessage(input, "user");
    setInputValue("");
    if (currentStep === "welcome") {
      setClientData((prev) => ({ ...prev, name: input }));
      setTimeout(() => {
        addMessage(`Nice to meet you, ${input}! 🙏\n\nWhich service do you need?`, "bot", "options", serviceOptions.map((s, i) => `${i + 1}. ${s.label}`));
        setCurrentStep("selectService");
      }, 500);
      return;
    }
    if (currentStep === "selectService") {
      const selectedIndex = parseInt(input.split('.')[0]) - 1;
      const serviceKeys = Object.keys(services) as ServiceType[];
      if (selectedIndex >= 0 && selectedIndex < serviceKeys.length) {
        handleServiceSelect(serviceKeys[selectedIndex]);
      } else {
        const matched = serviceKeys.find(key => input.toLowerCase().includes(services[key].name.toLowerCase()) || input.toLowerCase().includes(key.toLowerCase()));
        if (matched) handleServiceSelect(matched);
        else addMessage("Please select a valid service number or name.");
      }
      return;
    }
    processStep(input);
  };

  const handleOptionSelect = (option: string) => {
    addMessage(option, "user");
    if (currentStep === "selectService") {
      const index = parseInt(option.split('.')[0]) - 1;
      const serviceKeys = Object.keys(services) as ServiceType[];
      if (index >= 0 && index < serviceKeys.length) handleServiceSelect(serviceKeys[index]);
      return;
    }
    processStep(option);
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) startChat();
  }, [isOpen]);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-colors",
          isOpen ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900" : "bg-gradient-to-r from-saffron-500 to-gold-500 text-white"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-saffron-500 to-gold-500 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Divine Jyothi Assistant</h3>
                <p className="text-white/80 text-xs">Usually responds instantly</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn("flex gap-3", msg.sender === "user" ? "flex-row-reverse" : "flex-row")}
                >
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0", msg.sender === "user" ? "bg-saffron-100 dark:bg-saffron-900/30" : "bg-gray-100 dark:bg-gray-800")}>
                    {msg.sender === "user" ? <User className="w-4 h-4 text-saffron-600" /> : <Bot className="w-4 h-4 text-gray-600 dark:text-gray-400" />}
                  </div>
                  <div className={cn("max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap", msg.sender === "user" ? "bg-saffron-500 text-white rounded-br-sm" : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm")}>
                    <div>{msg.text}</div>
                    {msg.type === "options" && msg.options && (
                      <div className="mt-3 space-y-2">
                        {msg.options.map((option, idx) => (
                          <button key={idx} onClick={() => handleOptionSelect(option)} className="w-full text-left px-3 py-2 rounded-lg bg-white dark:bg-gray-700 hover:bg-saffron-50 dark:hover:bg-saffron-900/20 text-sm text-gray-700 dark:text-gray-300 hover:text-saffron-700 dark:hover:text-saffron-400 transition-colors border border-gray-200 dark:border-gray-600">
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                    {msg.type === "summary" && (
                      <div className="mt-4">
                        <button onClick={() => window.location.href = "/book"} className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:shadow-lg transition-shadow">
                          Pay Rs.{selectedService ? services[selectedService].fee : 0} & Book Now
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                    <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
                    <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
                    <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleUserInput(inputValue)}
                  placeholder="Type your response..."
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron-500/50"
                />
                <button onClick={() => handleUserInput(inputValue)} className="px-4 py-3 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white hover:shadow-lg transition-shadow">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
