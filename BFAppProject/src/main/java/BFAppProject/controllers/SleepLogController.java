package BFAppProject.controllers;

import BFAppProject.dto.SleepLogEntryDTO;
import BFAppProject.models.SleepLogEntry;
import BFAppProject.services.SleepLogEntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
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
