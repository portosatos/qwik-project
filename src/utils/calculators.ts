export const calculatePenalty = (amount: number, days: number, rate: number) => {
    return (amount * days * rate) / 36500;
  };
  