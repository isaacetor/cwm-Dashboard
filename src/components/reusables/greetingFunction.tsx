export const greetUser = (name: string): string => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting: string;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = `Good morning, ${name} 🌅!`;
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = `Good afternoon, ${name} ☀️!`;
  } else {
    greeting = `Good evening, ${name} 🌙!`;
  }

  return greeting;
};
