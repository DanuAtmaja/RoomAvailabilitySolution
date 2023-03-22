/**
 * Question
 * Input: x = 1, represent the total room needed
 * and y = 3, represent how many night required
 * roomAvailability = [1,3,2,3,0,2,3,4,1] 
 * expected output Output: [1,2,6,7,8,9] 
 */

const x = 1;
const y = 3;
const roomAvailability = [1,3,2,3,0,2,3,4,1];

function checkAvailibility(roomNeeded, totalNight, roomAvailability) {
  let result = [];
  let isAvailable = true;
  
  for(let i = 0; i < roomAvailability.length; i++) {
    isAvailable = true;
    for(let j = 0; j < totalNight; j++) {
      if (roomAvailability[i+j] < roomNeeded) {
        isAvailable = false;
        break;
      }
    }

    if (isAvailable) {
      result.push(i+1);
    }
  };

  return result;
}

function displayResult(arr) {
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output += `${arr[i]}\t`
  }
  console.log(output);
};

displayResult(checkAvailibility(x, y, roomAvailability));