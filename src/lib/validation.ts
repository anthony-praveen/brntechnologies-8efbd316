// Basic profanity filter - common inappropriate words
const PROFANITY_LIST = [
  'fuck', 'shit', 'ass', 'bitch', 'damn', 'crap', 'bastard', 'dick', 'cock', 
  'pussy', 'whore', 'slut', 'fag', 'nigger', 'cunt', 'piss', 'bollocks',
  'wanker', 'twat', 'arsehole', 'motherfucker', 'bullshit', 'asshole'
];

// Check if text contains profanity (case-insensitive, with word boundary detection)
export const containsProfanity = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  return PROFANITY_LIST.some(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    return regex.test(lowerText);
  });
};

// Country codes with max phone lengths and formatting patterns
export const COUNTRY_CODES = [
  // Asia
  { code: '+91', country: 'India', maxLength: 10, startsWith: /^[6-9]/, format: [5, 5] },
  { code: '+86', country: 'China', maxLength: 11, startsWith: /^1/, format: [3, 4, 4] },
  { code: '+81', country: 'Japan', maxLength: 10, startsWith: /^[0-9]/, format: [3, 4, 3] },
  { code: '+82', country: 'South Korea', maxLength: 10, startsWith: /^[0-9]/, format: [3, 4, 3] },
  { code: '+65', country: 'Singapore', maxLength: 8, startsWith: /^[0-9]/, format: [4, 4] },
  { code: '+60', country: 'Malaysia', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
  { code: '+66', country: 'Thailand', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+62', country: 'Indonesia', maxLength: 12, startsWith: /^[0-9]/, format: [3, 4, 5] },
  { code: '+63', country: 'Philippines', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
  { code: '+84', country: 'Vietnam', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
  { code: '+880', country: 'Bangladesh', maxLength: 10, startsWith: /^1/, format: [4, 3, 3] },
  { code: '+92', country: 'Pakistan', maxLength: 10, startsWith: /^3/, format: [3, 3, 4] },
  { code: '+94', country: 'Sri Lanka', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+977', country: 'Nepal', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
  
  // Middle East
  { code: '+971', country: 'UAE', maxLength: 9, startsWith: /^[0-9]/, format: [2, 3, 4] },
  { code: '+966', country: 'Saudi Arabia', maxLength: 9, startsWith: /^5/, format: [2, 3, 4] },
  { code: '+974', country: 'Qatar', maxLength: 8, startsWith: /^[0-9]/, format: [4, 4] },
  { code: '+973', country: 'Bahrain', maxLength: 8, startsWith: /^[0-9]/, format: [4, 4] },
  { code: '+968', country: 'Oman', maxLength: 8, startsWith: /^[0-9]/, format: [4, 4] },
  { code: '+965', country: 'Kuwait', maxLength: 8, startsWith: /^[0-9]/, format: [4, 4] },
  { code: '+972', country: 'Israel', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  
  // Europe
  { code: '+44', country: 'UK', maxLength: 10, startsWith: /^[1-9]/, format: [4, 3, 3] },
  { code: '+49', country: 'Germany', maxLength: 11, startsWith: /^[0-9]/, format: [3, 4, 4] },
  { code: '+33', country: 'France', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+39', country: 'Italy', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
  { code: '+34', country: 'Spain', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+31', country: 'Netherlands', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+32', country: 'Belgium', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+41', country: 'Switzerland', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+46', country: 'Sweden', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+47', country: 'Norway', maxLength: 8, startsWith: /^[0-9]/, format: [4, 4] },
  { code: '+45', country: 'Denmark', maxLength: 8, startsWith: /^[0-9]/, format: [4, 4] },
  { code: '+48', country: 'Poland', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+43', country: 'Austria', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
  { code: '+353', country: 'Ireland', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+351', country: 'Portugal', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+30', country: 'Greece', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
  { code: '+7', country: 'Russia', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
  
  // Americas
  { code: '+1', country: 'USA/Canada', maxLength: 10, startsWith: /^[2-9]/, format: [3, 3, 4] },
  { code: '+52', country: 'Mexico', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
  { code: '+55', country: 'Brazil', maxLength: 11, startsWith: /^[0-9]/, format: [2, 5, 4] },
  { code: '+54', country: 'Argentina', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
  { code: '+57', country: 'Colombia', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
  { code: '+56', country: 'Chile', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  
  // Oceania
  { code: '+61', country: 'Australia', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+64', country: 'New Zealand', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  
  // Africa
  { code: '+27', country: 'South Africa', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+234', country: 'Nigeria', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
  { code: '+254', country: 'Kenya', maxLength: 9, startsWith: /^[0-9]/, format: [3, 3, 3] },
  { code: '+20', country: 'Egypt', maxLength: 10, startsWith: /^[0-9]/, format: [3, 3, 4] },
];

// Format phone number with spaces based on country format pattern
export const formatPhoneNumber = (phone: string, countryCode: string): string => {
  const digits = phone.replace(/\D/g, '');
  const country = COUNTRY_CODES.find(c => c.code === countryCode);
  
  if (!country || !digits) return digits;
  
  const format = country.format;
  let formatted = '';
  let position = 0;
  
  for (let i = 0; i < format.length && position < digits.length; i++) {
    const chunk = digits.slice(position, position + format[i]);
    formatted += (i > 0 ? ' ' : '') + chunk;
    position += format[i];
  }
  
  return formatted;
};

// Get raw digits from formatted phone
export const getPhoneDigits = (phone: string): string => {
  return phone.replace(/\D/g, '');
};

// Validate phone number based on country code
export const isValidPhoneNumber = (phone: string, countryCode: string): boolean => {
  if (!phone || phone.trim() === '') return true; // Phone is optional
  
  const cleaned = getPhoneDigits(phone);
  const country = COUNTRY_CODES.find(c => c.code === countryCode);
  
  if (!country) {
    // For unknown country codes, just check it's digits only and reasonable length
    return /^\d{6,15}$/.test(cleaned);
  }
  
  // Check length and starting digit pattern for known countries
  if (cleaned.length !== country.maxLength) return false;
  if (!country.startsWith.test(cleaned)) return false;
  
  return true;
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

// Validate name - only letters, spaces, and common name characters
export const isValidName = (name: string): boolean => {
  if (!name || name.trim().length < 2) return false;
  if (name.trim().length > 100) return false;
  
  // Allow letters (including Unicode for international names), spaces, hyphens, apostrophes, periods
  const nameRegex = /^[\p{L}\s\-'.]+$/u;
  return nameRegex.test(name.trim());
};

// Validate message length
export const isValidMessage = (message: string): boolean => {
  if (!message || message.trim() === '') return true; // Message is optional
  return message.trim().length <= 1000;
};

// Full form validation
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface ContactFormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  interest: string;
  message: string;
}

export const validateContactForm = (data: ContactFormData): ValidationResult => {
  const errors: Record<string, string> = {};

  // Name validation
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required';
  } else if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name (2-100 characters, letters only)';
  } else if (containsProfanity(data.name)) {
    errors.name = 'Please use appropriate language';
  }

  // Email validation
  if (!data.email || data.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  } else if (containsProfanity(data.email.split('@')[0])) {
    errors.email = 'Please use an appropriate email address';
  }

  // Phone validation
  if (data.phone && !isValidPhoneNumber(data.phone, data.countryCode)) {
    const country = COUNTRY_CODES.find(c => c.code === data.countryCode);
    const maxLen = country?.maxLength || 10;
    errors.phone = `Please enter a valid ${maxLen}-digit phone number`;
  }

  // Interest validation
  if (!data.interest) {
    errors.interest = 'Please select an interest type';
  }

  // Message validation
  if (data.message && !isValidMessage(data.message)) {
    errors.message = 'Message must be less than 1000 characters';
  } else if (data.message && containsProfanity(data.message)) {
    errors.message = 'Please use appropriate language in your message';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
