package org.example.backend.controller;

import lombok.AllArgsConstructor;
import org.example.backend.entity.Event;
import org.example.backend.entity.Performer;
import org.example.backend.model.DefaultEventModel;
import org.example.backend.model.EventInfoModel;
import org.example.backend.service.EventService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class EventController {
    private EventService eventService;
    @GetMapping("/events")
    public ResponseEntity<List<DefaultEventModel>> getEvents(){
        List<Event> events=eventService.getEvents();
        List<DefaultEventModel> models=new LinkedList<>();
        for (Event event : events) {
            models.add(DefaultEventModel.builder()
                    .place(event.getPlace())
                    .name(event.getName()
                            )
                    .image(event.getImage())
                    .dateTime(event.getDateTime())
                    .build());
        }
        return new ResponseEntity<>(models, HttpStatus.OK);
    }

    @GetMapping("event/{id}")
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
}
