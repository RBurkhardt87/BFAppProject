package BFAppProject.controllers;

import BFAppProject.dto.SleepLogEntryDTO;
import BFAppProject.dto.UserRequestDTO;
import BFAppProject.dto.UserResponseDTO;
import BFAppProject.models.SleepLogEntry;
import BFAppProject.models.User;
import BFAppProject.services.SleepLogEntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/sleep-log")
public class SleepLogController {

    @Autowired
    private final SleepLogEntryService sleepLogEntryService;

    public SleepLogController(SleepLogEntryService sleepLogEntryService) {
        this.sleepLogEntryService = sleepLogEntryService;
    }


    @PostMapping("/create")
    public ResponseEntity<SleepLogEntryDTO> saveSleepLog(@RequestBody SleepLogEntryDTO sleepLogEntryDTO) {
        try {
            SleepLogEntry savedSleepLogEntry = sleepLogEntryService.saveSleepLog(sleepLogEntryDTO);
            SleepLogEntryDTO sleepLogDTO = sleepLogEntryService.convertToDTO(savedSleepLogEntry);
            return ResponseEntity.ok(sleepLogDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }


}
