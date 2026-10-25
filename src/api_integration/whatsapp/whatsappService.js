import {
  // Embedded Signup
  getSignupConfig,
  completeEmbeddedSignup,

  // WhatsApp Connection
  connectWhatsApp,
  getConnectionStatus,
  disconnectWhatsApp,

} from "../../api_integration/whatsapp/whatsappApi";

class WhatsAppService {

  /* ==========================================
     Embedded Signup
  ========================================== */

  async getSignupConfig() {
    return await getSignupConfig();
  }

  async completeEmbeddedSignup(data) {
    return await completeEmbeddedSignup(data);
  }

  /* ==========================================
     WhatsApp Connection
  ========================================== */

  async connect(data) {
    return await connectWhatsApp(data);
  }

  async getConnectionStatus() {
    return await getConnectionStatus();
  }

  async disconnect() {
    return await disconnectWhatsApp();
  }

  /* ==========================================
     Business Accounts
  ========================================== */

  // Methods removed as they are not used and not implemented in whatsappApi.js
}


const whatsappService = new WhatsAppService();

export default whatsappService;