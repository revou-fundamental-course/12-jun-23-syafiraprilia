let temperatures = [];

    function convert() {
      const tempInput = document.getElementById('tempInput').value;
      const celsius = parseFloat(tempInput);
      const fahrenheit = (celsius * 9/5) + 32;
      const result = `${celsius} derajat Celsius = ${fahrenheit} derajat Fahrenheit`;
      temperatures.push(result);
      document.getElementById('result').innerHTML = result;
    }

    function reset() {
      temperatures = [];
      document.getElementById('result').innerHTML = '';
      document.getElementById('tempInput').value = '';
    }

    function reverse() {
      const reversedTemperatures = temperatures.map(temp => {
        const matches = temp.match(/(\d+(?:\.\d+)?) derajat Celsius = (\d+(?:\.\d+)?) derajat Fahrenheit/);
        if (matches) {
          const fahrenheit = parseFloat(matches[2]);
          const celsius = (fahrenheit - 32) * 5/9;
          return `${fahrenheit} derajat Fahrenheit = ${celsius} derajat Celsius`;
        } else {
          return temp;
        }
      });

      reversedTemperatures.reverse();
      document.getElementById('result').innerHTML = reversedTemperatures.join('<br>');
    }