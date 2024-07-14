// import {ActionGetResponse, ActionPostResponse, ActionPostRequest, ACTIONS_CORS_HEADERS} from "@solana/actions"
// import { SystemProgram, Transaction, Connection, clusterApiUrl } from '@solana/web3.js';
// import { PublicKey } from "@solana/web3.js";
// export async function GET(request: Request) {
//   const response: ActionGetResponse = {
//     icon: "https://plus.unsplash.com/premium_photo-1720794773973-48b8482d177d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
//     description: "This is ayush",
//     title: "Do blink!",
//     label: "Click me!",
//     error: {message: "This blink is not implemented yet!"}
//   }
  
//   return Response.json(response, {headers: ACTIONS_CORS_HEADERS});
// }

// export async function POST(request: Request){
  
//   const requestBody: ActionPostRequest = await request.json();
//   const userPubkey = requestBody.account;
//   console.log(userPubkey);

//   const connection = new Connection(clusterApiUrl("mainnet-beta"));
//   const tx = new Transaction();
//   tx.feePayer = new PublicKey(userPubkey);
//   tx.recentBlockhash = (await connection.getLatestBlockhash({commitment: "finalized"})).blockhash;
//   // SystemProgram.programId.toBase58();
//   const serialTX = tx.serialize({requireAllSignatures: false, verifySignatures: false}).toString("base64");

//   const response: ActionPostResponse = {
//     transaction:serialTX,
//     message: "HELLO " + userPubkey,
//   };
  
//   return Response.json(response, {headers: ACTIONS_CORS_HEADERS});
// }



// export async function OPTIONS(request: Request){
//   return new Response(null, {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type',
//       'Access-Control-Max-Age': '86400',
//     },
//   });
// // }
// import { ACTIONS_CORS_HEADERS, ActionGetResponse } from "@solana/actions";
// import * as anchor from '@coral-xyz/anchor';
// import { Program } from '@coral-xyz/anchor';
// import { Voting } from '@/../anchor/target/types/voting';
// import { PublicKey } from '@solana/web3.js';

// export const OPTIONS = GET;

// export async function GET(request: Request) {
//     const response:ActionGetResponse = {
//         icon: "https://media.istockphoto.com/id/178862205/photo/peanut-butter.jpg?s=612x612&w=0&k=20&c=jNDZZ-2ExpjWpFSRYiWUWRhuj6beu9dq04AMini_zxs=",
//         title: 'Voting',
//         description: 'Vote for your favourite peanut butter',
//         label: 'Vote',
//         links: {
//             actions: [{
//                 href: 'http://localhost:3000/api/vote?candidate=smooth' || 'https://solana-blink-one.vercel.app',
//                 label: 'Vote Crunchy',
//             },
//             {
//                 href: 'http://localhost:3000/api/vote?candidate=smooth' || 'https://solana-blink-one.vercel.app',
//                 label: 'Vote Smooth',
//             }
//             ]
//         }
//     };
//     return Response.json(response, {headers: {'Access-Control-Allow-Origin': '*'}});
// }

// export async function POST(request: Request) {

//     anchor.setProvider(anchor.AnchorProvider.env());
//     const program = anchor.workspace.Voting as Program<Voting>;

//     const pollIdBuffer = new anchor.BN(1).toArrayLike(Buffer, "le", 8)
//     const [pollAddress] = PublicKey.findProgramAddressSync(
//         [Buffer.from("poll"), pollIdBuffer],
//         program.programId
//     );

//     let url = new URL(request.url);
//     const vote = url.searchParams.get('candidate') as string;
//     if (vote !== 'crunchy' && vote !== 'smooth') {
//         return Response.json({error: 'You voted for the wrong candidate'}, {status:400, headers: ACTIONS_CORS_HEADERS});
//     }

//     const [firstCandidateAddress] = PublicKey.findProgramAddressSync(
//         [pollIdBuffer, Buffer.from(url.searchParams.get('candidate') as string)],
//         program.programId
//     );

//     const tx = await program.methods.vote(
//         new anchor.BN(1),
//         "smooth",
//     ).accounts(
//             {
//                 pollAccount: pollAddress,
//                 candidateAccount: firstCandidateAddress,
//             }
        
// )
//     return Response.json({}, {headers: ACTIONS_CORS_HEADERS});
// }

