// write your lambda here

module.exports.reverser = (input) => {
  console.log("Reverser::begin")
  let output = ""

  console.log("Input", input.body)
  for(let i = input.body.length - 1; i >= 0; i--){
    output = output + input.body[i]
  }
  
  console.log("Output", output)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Thank you for using the reverser!",
      payload: output
    },)
  }
}
