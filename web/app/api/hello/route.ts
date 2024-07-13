import {ActionGetResponse, ActionPostResponse, ActionPostRequest, ACTIONS_CORS_HEADERS} from "@solana/actions"
import { SystemProgram, Transaction, Connection, clusterApiUrl } from '@solana/web3.js';
import { PublicKey } from "@solana/web3.js";
export async function GET(request: Request) {
  const response: ActionGetResponse = {
    icon: "https://plus.unsplash.com/premium_photo-1720794773973-48b8482d177d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    description: "This is ayush",
    title: "Do blink!",
    label: "Click me!",
    error: {message: "This blink is not implemented yet!"}
  }
  
  return Response.json(response, {headers: ACTIONS_CORS_HEADERS});
}

export async function POST(request: Request){
  
  const requestBody: ActionPostRequest = await request.json();
  const userPubkey = requestBody.account;
  console.log(userPubkey);

  const connection = new Connection(clusterApiUrl("mainnet-beta"));
  const tx = new Transaction();
  tx.feePayer = new PublicKey(userPubkey);
  tx.recentBlockhash = (await connection.getLatestBlockhash({commitment: "finalized"})).blockhash;
  // SystemProgram.programId.toBase58();
  const serialTX = tx.serialize({requireAllSignatures: false, verifySignatures: false}).toString("base64");

  const response: ActionPostResponse = {
    transaction:serialTX,
    message: "HELLO " + userPubkey,
  };
  
  return Response.json(response, {headers: ACTIONS_CORS_HEADERS});
}



export async function OPTIONS(request: Request){
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}