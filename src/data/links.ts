// Every public link and contact on the About page and footer lives here.
// Leave a url empty ('') and that item shows as "Link coming soon" instead of a link.
export const LINKS = {
  instagramKsuCet: 'https://www.instagram.com/ksu.cet/',
  instagramSacCet: 'https://www.instagram.com/studentassistcell_cet/',
  sacWebsite: 'https://sac.ksucet.in/',
  saclearnHome: 'https://saclearn.ksucet.in/', // main SAC Learn site (the Back to SAC button goes here)
  youtube: '', // add the YouTube channel link
  email: '', // add the team email address, e.g. 'sac@ksucet.in'
  whatsapp: 'https://wa.me/919207920722', // opens a chat with the website manager; replace with a group or channel link if you have one
}

export const TEAM = {
  manager: { name: 'Rajath A', phone: '9207920722' },
  web: [
    { name: 'Subin', phone: '8891700667' },
    { name: 'Mareo', phone: '73066 41617' },
  ],
}

export const waHref = (p: string) => 'https://wa.me/91' + p.replace(/\D/g, '')
export const telHref = (p: string) => 'tel:+91' + p.replace(/\s/g, '')
