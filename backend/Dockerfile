FROM node:20 
//Node.js ပါတဲ့ Official Image ကို သုံးပြီး Container ကို Build လုပ်မယ်။

WORKDIR /app

COPY package*.json ./              
//package.json နဲ့ package-lock.json ကို အရင် Copy လုပ်

RUN npm install  //Dependencies Install

COPY . .    //ကျန်တဲ့ Source Code ကို Copyလုပ်

EXPOSE 3000

CMD ["npm","start"]

//all comment are delete