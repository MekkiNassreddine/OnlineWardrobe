// App Imports
import Home from '../../modules/pages/Home'
import Men from '../../modules/pages/Men'
import Women from '../../modules/pages/Women'
import HowItWorks from '../../modules/pages/HowItWorks'
import WhatsNew from '../../modules/pages/WhatsNew'
import Onboarding from '../../modules/pages/Onboarding'

// Home routes
export default {


  men: {
    path: '/men',
    component: Men
  },

  women: {
    path: '/women',
    component: Women
  },

  howItWorks: {
    path: '/how-it-works',
    component: HowItWorks
  },

  whatsNew: {
    path: '/whats-new',
    component: WhatsNew
  },
  Onboarding: {
    path: '/Onboarding',
    component: Onboarding
  }
}
