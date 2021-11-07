export const reducedAvg = (characters) => {
  const mass = Math.round(characters.reduce((sum, current) => {return sum + current.mass}, 0) / characters.length *100)/100;
  const height = Math.round(characters.reduce((sum, current) => {return sum + current.height;}, 0) / characters.length *100)/100;
  return {mass, height}
};
