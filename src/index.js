module.exports = function toReadable (number) {

  let numbers0to9 = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let numbers10to19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let numbers20to90 = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
 
  switch (true){
      case number < 10:
        return numbers0to9[number];

      case number < 20:
        return numbers10to19[number.toString()[1]];

      case number < 100:
          if (number.toString()[1] === '0'){
              return numbers20to90[number.toString()[0]];
          }else{
             return numbers20to90[number.toString()[0]] + ' ' + numbers0to9[number.toString()[1]];
          }
        
      case number < 1000:
        if (number.toString()[1] === '0' && number.toString()[2] === '0'){
            return numbers0to9[number.toString()[0]] + ' ' + 'hundred';
             }
        else if (number.toString()[1] === '1'){
            return numbers0to9[number.toString()[0]] + ' ' + 'hundred' + ' ' + numbers10to19[number.toString()[2]];
        }
        else if (number.toString()[2] === '0'){
            return numbers0to9[number.toString()[0]] + ' ' + 'hundred' + ' ' + numbers20to90[number.toString()[1]];
        }
        else if (number.toString()[1] === '0'){
            return numbers0to9[number.toString()[0]] + ' ' + 'hundred' + ' ' + numbers0to9[number.toString()[2]];
        }
        else{
            return numbers0to9[number.toString()[0]] + ' ' + 'hundred' + ' ' + numbers20to90[number.toString()[1]] + ' ' + numbers0to9[number.toString()[2]];
        }

 }
}
