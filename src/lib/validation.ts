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

// Country codes with max phone lengths
export const COUNTRY_CODES = [
  { code: '+91', country: 'India', maxLength: 10, startsWith: /^[6-9]/ },
  { code: '+1', country: 'USA/Canada', maxLength: 10, startsWith: /^[2-9]/ },
  { code: '+44', country: 'UK', maxLength: 10, startsWith: /^[1-9]/ },
  { code: '+971', country: 'UAE', maxLength: 9, startsWith: /^[0-9]/ },
  { code: '+65', country: 'Singapore', maxLength: 8, startsWith: /^[0-9]/ },
  { code: '+61', country: 'Australia', maxLength: 9, startsWith: /^[0-9]/ },
  { code: '+49', country: 'Germany', maxLength: 11, startsWith: /^[0-9]/ },
  { code: '+33', country: 'France', maxLength: 9, startsWith: /^[0-9]/ },
];

// Validate phone number based on country code
export const isValidPhoneNumber = (phone: string, countryCode: string): boolean => {
  if (!phone || phone.trim() === '') return true; // Phone is optional
  
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  const country = COUNTRY_CODES.find(c => c.code === countryCode);
  
  if (!country) {
    // For unknown country codes, just check it's digits only and reasonable length
    return /^\d{6,15}$/.test(cleaned);
  }
  
  // Check length and starting digit pattern for known countries
  if (cleaned.length !== country.maxLength) return false;
  if (!country.startsWith.test(cleaned)) return false;
  
  return /^\d+$/.test(cleaned);
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
