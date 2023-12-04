import {Request, Response, NextFunction} from "express";
// import * as functions from "firebase-functions";
// import {OpenAI} from "openai";
import {db} from "../config/firebase";

// const openAIKey = functions.config().chatgpt.private_key;
type MessageType = {role: string, content: string}
type LogReqType = {userID: string, messageObj: {role: string, content: string}}
type ChatLogType = MessageType[]
interface CustomRequest extends Request {
  body: LogReqType,
  params: {userId: string}
}

// const openai = new OpenAI({apiKey: openAIKey});

const generateResponse = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    // check to see if the userID in req.body.userID has a chatlog in the chatLogs collection
    const userChatLogRef = db.collection("chatLogs").doc(req.body.userID);
    const userChatLogDoc = await userChatLogRef.get();
    // if so save chatlog to a variable "currChatLog" and push new query which is req.body.messageObj
    // else begin chatlog and push initial query that is req.body.messageObj into an empty array
    let chatLog: ChatLogType = [];

    if (userChatLogDoc.exists) {
      // If chat log exists, retrieve it
      const userChatLogData = userChatLogDoc.data();
      if (userChatLogData) {
        chatLog = userChatLogData.chatLog;
      }
    }
    chatLog.push(req.body.messageObj);

    // then we will make a call to the chatGPT API to get the chat.completion for the message
    // by passing in the chatLog with the current query pushed in
    // const completion = await openai.chat.completions.create({
    //   messages: [
    //     {"role": "system", "content": "You are a helpful assistant."},
    //     {"role": "user", "content": "Who won the world series in 2020?"},
    //     {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
    //     {"role": "user", "content": "Where was it played?"},
    //   ],
    //   model: "gpt-3.5-turbo",
    // });
    const fakeGptRes = "ChatbotResponse";
    // we will then get the response from the API call with the message. We will then push
    // a new message with {"role": "assistant", "content": "API call response message"} into
    // the chat log
    const chatbotMessageObj: MessageType = {"role": "assistant", "content": fakeGptRes};
    chatLog.push(chatbotMessageObj);
    // We will then save the updated chatlog to the database
    await userChatLogRef.set({userID: req.body.userID, chatLog});
    // Finally we will send the new chatLog back in the res.locals.chatRes property
    res.locals.chatRes = chatLog;
    // this works, however I am not updating userID properly on Login/Registration on the front end so it does
    // not return any data. With the correct userID this functionality works.
    next();
  } catch (error) {
    console.error("Error:", error);
  }
};


export {generateResponse};
