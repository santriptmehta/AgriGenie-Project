package com.blankSpace.AgriGenie.Repository;

import com.blankSpace.AgriGenie.Entity.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends MongoRepository<Message, String> {

}
