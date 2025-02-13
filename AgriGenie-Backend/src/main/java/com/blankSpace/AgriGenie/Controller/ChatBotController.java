package com.blankSpace.AgriGenie.Controller;

import com.blankSpace.AgriGenie.Entity.Message;
import com.blankSpace.AgriGenie.Service.ChatBotService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Member;
import java.util.List;

@RestController
@RequestMapping("/api/chatbot")
public class ChatBotController {
    private final ChatBotService chatBotService;

    public ChatBotController(ChatBotService chatBotService){
        this.chatBotService = chatBotService;
    }

    @PostMapping("/ask")
    public String askChatBot(@RequestBody String userMessage){
        return chatBotService.getChatBotResponse(userMessage);
    }
    @GetMapping("/history")
    public ResponseEntity<List<Message>> getChatHistory(){
        return chatBotService.getAllMessage();
    }
}
