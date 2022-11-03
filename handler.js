// write your lambda here

export default function reverser(input) {
  let output = ""
  for(let i = input.length - 1; i >= 0; i--){
    output = output + input[i]
  }
  
  return {
    "statusCode": 200,
    "body": {
      "message": "Thank you for using the reverser!",
      "payload": output
    }
  }
}
