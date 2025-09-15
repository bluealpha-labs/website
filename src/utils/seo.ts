export const BRAND = 'BlueAlpha'

export const pageTitle = (specific: string) => `${specific} | ${BRAND}`

// Section-specific helpers for consistent phrasing
export const careersDetailTitle = (role: string) => `${role} — Careers | ${BRAND}`
export const caseStudyDetailTitle = (company: string, title: string) => `${company} — ${title} | ${BRAND}`
export const marketingPlaybooksIndexTitle = () => pageTitle('Marketing Playbooks')
export const careersIndexTitle = () => pageTitle('Careers')
export const referralTitle = () => pageTitle('Referral Program')
export const termsTitle = () => pageTitle('Terms of Service')
export const privacyTitle = () => pageTitle('Privacy Policy')

