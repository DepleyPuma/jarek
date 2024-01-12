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
import java.util.Optional;

@SpringBootApplication
public class BackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackEndApplication.class, args);
    }
@Bean
    CommandLineRunner runner(EventService eventService){
        return runner ->{
            addEvent(eventService);
            getEvents(eventService);
        };
    }

    private void getEvents(EventService eventService) {
        List<Event> events=eventService.getEvents();
        System.out.println(events);

        Optional<Event> optionalEvent=eventService.getEventById(1);
        if(optionalEvent.isPresent()){
            System.out.println(optionalEvent.get());
        }else {
            System.out.println("notfound");
        }
        Optional<Event> optionalEvent2=eventService.getEventById(5);
        if(optionalEvent2.isPresent()){
            System.out.println(optionalEvent2.get());
        }else {
            System.out.println("notfound");
        }
    }

    private void addEvent(EventService eventService) {
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


        Event eventToSave2= Event.builder()
                .dateTime(LocalDateTime.now())
                .place("wroclaw")
                .description("simple description2")
                .name("festival")
                .build();
        List<Performer> performers2=new LinkedList<>();
        performers2.add(Performer.builder()
                .event(eventToSave2)
                .name("mafia gang").build());
        performers2.add(Performer.builder()
                .event(eventToSave2)
                .name("kastet thc").build());
        eventToSave2.setPerformers(performers2);
        eventService.addEvent(eventToSave2);


        Event eventToSave3= Event.builder()
                .dateTime(LocalDateTime.now())
                .place("krakow")
                .description("simple description3")
                .name("Albanski Tour")
                .build();
        List<Performer> performers3=new LinkedList<>();
        performers3.add(Performer.builder()
                .event(eventToSave3)
                .name("gang albani").build());
        eventToSave3.setPerformers(performers3);
        eventService.addEvent(eventToSave3);
    }
}
