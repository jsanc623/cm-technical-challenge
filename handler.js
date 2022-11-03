// write your lambda here

module.exports.reverser = (input) => {
  console.log("Reverser::begin")
  let output = ""

  console.log("Input", input)
  for(let i = input.length - 1; i >= 0; i--){
    output = output + input[i]
  }
  
  console.log("Output", output)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Thank you for using the reverser!",
      payload: output
    })
  }
}
