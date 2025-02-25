package com.blankSpace.AgriGenie.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "message")
public class Message {

    @Id
    private String id;

    private String userMessage;
    private String botResponse;
    private LocalDateTime localDateTime;


    public Message(){
        this.localDateTime = LocalDateTime.now();
    }
    public Message(String userMessage, String botResponse){
        this.userMessage = userMessage;
        this.botResponse = botResponse;
        this.localDateTime = LocalDateTime.now();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserMessage() {
        return userMessage;
    }

    public void setUserMessage(String userMessage) {
        this.userMessage = userMessage;
    }

    public String getBotResponse() {
        return botResponse;
    }

    public void setBotResponse(String botResponse) {
        this.botResponse = botResponse;
    }

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }
}
