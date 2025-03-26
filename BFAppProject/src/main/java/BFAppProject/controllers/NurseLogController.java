package BFAppProject.controllers;

import BFAppProject.dto.DiaperLogEntryDTO;
import BFAppProject.dto.NurseLogEntryDTO;
import BFAppProject.models.DiaperLogEntry;
import BFAppProject.models.NurseLogEntry;
import BFAppProject.services.DiaperLogEntryService;
import BFAppProject.services.NurseLogEntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RestController
@RequestMapping("/api/nurse-log")
public class NurseLogController {

    @Autowired
    private final NurseLogEntryService nurseLogEntryService;

    public NurseLogController(NurseLogEntryService nurseLogEntryService) {
        this.nurseLogEntryService = nurseLogEntryService;
    }


    @PostMapping("/create")
    public ResponseEntity<NurseLogEntryDTO> saveNurseLog(@RequestBody NurseLogEntryDTO nurseLogEntryDTO) {
        try {
            NurseLogEntry savedNurseLogEntry = nurseLogEntryService.saveNurseLog(nurseLogEntryDTO);
            NurseLogEntryDTO nurseLogDTO = nurseLogEntryService.convertToDTO(savedNurseLogEntry);
            return ResponseEntity.ok(nurseLogDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
