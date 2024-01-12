package org.example.backend.controller;

import lombok.AllArgsConstructor;
import org.example.backend.entity.Event;
import org.example.backend.entity.Performer;
import org.example.backend.model.DefaultEventModel;
import org.example.backend.model.EventInfoModel;
import org.example.backend.model.EventRequestModel;
import org.example.backend.service.EventService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@CrossOrigin
public class EventController {
    private EventService eventService;
    @GetMapping("/events")
    public ResponseEntity<List<DefaultEventModel>> getEvents(){
        List<Event> events=eventService.getEvents();
        List<DefaultEventModel> models=new LinkedList<>();
        for (Event event : events) {
            models.add(DefaultEventModel.builder()
                            .id(event.getId())
                    .place(event.getPlace())
                    .name(event.getName()
                            )
                    .image(event.getImage())
                    .dateTime(event.getDateTime())
                    .build());
        }
        return new ResponseEntity<>(models, HttpStatus.OK);
    }

    @GetMapping("/event/{id}")
    public ResponseEntity<EventInfoModel> getEventInfo(@PathVariable long id){
        Optional<Event> optionalEvent=eventService.getEventById(id);
        if(optionalEvent.isEmpty())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        List<String> performers=new LinkedList<>();
        for(Performer performer:optionalEvent.get().getPerformers()){
            performers.add(performer.getName());
        }
        EventInfoModel model=EventInfoModel.builder()
                .description(optionalEvent.get().getDescription())
                .performers(performers).build();
        return new ResponseEntity<>(model,HttpStatus.OK);
    }

    @PostMapping("/add-event")
    public DefaultEventModel addEvent(@RequestBody EventRequestModel request){
        System.out.println(request);
        List<Performer> performers=new LinkedList<>();

//        DateTimeFormatter formatter=DateTimeFormatter.ofPattern("yyyy-MM-dd'T'hh:mm");
//        LocalDateTime dateTime=LocalDateTime.parse("2018-06-12T19:30",formatter);
        LocalDateTime dateTime=request.getDateTime();
        Event event=Event.builder()
                .name(request.getName())
                .description(request.getDescription())
                .place(request.getPlace())
                .image(null)
                .dateTime(dateTime)
                .build();

        for(int i=0;i<request.getPerformers().size();i++){
            performers.add(Performer.builder()
                    .name(request.getPerformers().get(i))
                    .event(event).build());
        }
        event.setPerformers(performers);
        Event event1=eventService.addEvent(event);
        DefaultEventModel model=DefaultEventModel.builder()
                .id(event1.getId())
                .place(event1.getPlace())
                .name(event1.getName()
                )
                .image(event1.getImage())
                .dateTime(event1.getDateTime())
                .build();
        return model;
    }
}
