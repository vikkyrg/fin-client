export const formatCurrency = (amount) => {
  if (amount === undefined || amount === null || isNaN(amount)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatDate = (dateString) => {
  if (!dateString) return '-';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-IN', options);
};

export const LOAN_SLUG_MAP = {
  'personal-loan': 'Personal Loan',
  'loan-against-securities': 'Loan Against Securities',
  'business-loan': 'Business Loan',
  'home-loan': 'Home Loan',
  'loan-against-property': 'Loan Against Property',
  'education-loan': 'Education Loan',
  'gold-loan': 'Gold Loan'
};
