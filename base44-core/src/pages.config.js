export const pagesConfig = {
  routes: [
    { path: '/', component: 'Dashboard' },
    { path: '/reports', component: 'Reports' },
    { path: '/report/:id', component: 'Report' },
    { path: '/checklist', component: 'Checklist' },
    { path: '/brief', component: 'WeeklyBrief' },
    { path: '/triage', component: 'TriageResult' },
    { path: '/onboarding', component: 'Onboarding' },
    { path: '/setup', component: 'ReadinessSetup' }
  ],
  theme: 'dark'
};
