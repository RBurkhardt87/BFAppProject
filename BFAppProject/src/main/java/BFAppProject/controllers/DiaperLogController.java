package BFAppProject.controllers;

import BFAppProject.dto.DiaperLogEntryDTO;
import BFAppProject.models.DiaperLogEntry;
import BFAppProject.services.DiaperLogEntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RestController
@RequestMapping("/api/diaper-log")
public class DiaperLogController {

    @Autowired
    private final DiaperLogEntryService diaperLogEntryService;

    public DiaperLogController(DiaperLogEntryService diaperLogEntryService) {
        this.diaperLogEntryService = diaperLogEntryService;
    }

    @PostMapping("/create")
    public ResponseEntity<DiaperLogEntryDTO> saveDiaperLog(@RequestBody DiaperLogEntryDTO diaperLogEntryDTO) {
        try {
            DiaperLogEntry savedDiaperLogEntry = diaperLogEntryService.saveDiaperLog(diaperLogEntryDTO);
            DiaperLogEntryDTO diaperLogDTO = diaperLogEntryService.convertToDTO(savedDiaperLogEntry);
            return ResponseEntity.ok(diaperLogDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

}
