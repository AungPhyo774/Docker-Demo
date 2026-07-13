#EXPOSE-Demo test
# FROM nginx

# EXPOSE 80

# ----------------------------------

#ENV-Demo Test
# FROM ubuntu

# ENV MY_NAME=Aung

# CMD ["bash"]

# -----------------------------------

WORKDIR /app

COPY . .

CMD ["bash"]

# docker run -it ubuntu-demo <- ဒီဟာ run တဲ့အချိန်မှာ bash ကို တစ်ခါတည်း run ပေးတယ်
# CMD ["npm","start"] <- container စတဲ့ အချိန်မှာ ဒီ npm start ကို တစ်ခါတည်း run ပေးမယ်