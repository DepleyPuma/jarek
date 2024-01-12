package org.example.backend;

import org.example.backend.entity.Event;
import org.example.backend.entity.Performer;
import org.example.backend.service.EventService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;
import java.util.LinkedList;
import java.util.List;

@SpringBootApplication
public class BackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackEndApplication.class, args);
    }
@Bean
    CommandLineRunner runner(EventService eventService){
        return runner ->{
            addUser(eventService);
        };
    }

    private void addUser(EventService eventService) {
        Event eventToSave= Event.builder()
                .dateTime(LocalDateTime.now())
                .place("wwa")
                .description("simple description")
                .name("concert")
                .build();
        List<Performer> performers=new LinkedList<>();
        performers.add(Performer.builder()
                .event(eventToSave)
                .name("wyzysk band").build());
        performers.add(Performer.builder()
                .event(eventToSave)
                .name("zs").build());
        eventToSave.setPerformers(performers);
        eventService.addEvent(eventToSave);
    }
}
