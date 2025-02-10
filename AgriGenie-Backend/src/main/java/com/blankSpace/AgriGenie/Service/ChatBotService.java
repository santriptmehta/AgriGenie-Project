package com.blankSpace.AgriGenie.Service;


import com.blankSpace.AgriGenie.Entity.Message;
import com.blankSpace.AgriGenie.Repository.MessageRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class ChatBotService {

    private final MessageRepository messageRepository;
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public ChatBotService(MessageRepository messageRepository){
        this.messageRepository = messageRepository;
        this.restTemplate = new RestTemplate();
        this.objectMapper = new ObjectMapper();
    }

    public String getChatBotResponse(String userMessage){
        String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + geminiApiKey;

        try{
            Map<String, Object> requestBody = new HashMap<>();
            Map<String, Object> content = new HashMap<>();
            Map<String, Object> part = new HashMap<>();

            part.put("text", userMessage);
            content.put("parts", new Object[]{part});
            requestBody.put("contents", new Object[]{content});

            String jsonBody = objectMapper.writeValueAsString(requestBody);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            HttpEntity<String> requestEntity = new HttpEntity<>(jsonBody, headers);

            ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);
            String botResponse = responseEntity.getBody();

            Message message = new Message(userMessage, botResponse);
            messageRepository.save(message);

            return botResponse;


        }catch (Exception e){
            e.printStackTrace();
            return "Error calling AI service: " + e.getMessage();
        }
    }

    public List<Message> getAllMessage(){
        return messageRepository.findAll();
    }
}
