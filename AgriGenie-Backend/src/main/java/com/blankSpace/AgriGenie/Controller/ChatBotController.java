package com.blankSpace.AgriGenie.Controller;

import com.blankSpace.AgriGenie.Entity.Message;
import com.blankSpace.AgriGenie.Service.ChatBotService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chatbot")
@CrossOrigin(origins = "http://localhost:5173")
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
    @GetMapping("/machineInfo")
    public String getMachineInfo(){
        String os = System.getProperty("os.name");
        String version = System.getProperty("os.version");
        String arch = System.getProperty("os.arch");
        String javaVersion = System.getProperty("java.version");
        String user = System.getProperty("user.name");

        return "OS : " + os + " ,Version " + version + " ,arch " + arch + " ,Java Version" + javaVersion + " ,user " + user;
    }
}
