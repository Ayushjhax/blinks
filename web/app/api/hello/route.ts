import {ActionGetResponse, ActionPostResponse, ActionPostRequest} from "@solana/actions"

export async function GET(request: Request) {
  const response: ActionGetResponse = {
    icon: "https://plus.unsplash.com/premium_photo-1720794773973-48b8482d177d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    description: "This is ayush",
    title: "Do blink!",
    label: "Click me!",
    error: {message: "This blink is not implemented yet!"}
  }
  
  return Response.json(response);
}

export async function POST(request: Request){
  
  const postRequest: ActionPostRequest = await request.json();
  const userPubkey = postRequest.account;
  console.log(userPubkey);

  const response: ActionPostResponse = {
    transaction: "",
    message: "HELLO " + userPubkey,
  };
  
  return Response.json(response);
}