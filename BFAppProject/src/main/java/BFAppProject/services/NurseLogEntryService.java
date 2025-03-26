package BFAppProject.services;

import BFAppProject.data.DiaperLogEntryRepository;
import BFAppProject.data.NurseLogEntryRepository;
import BFAppProject.dto.DiaperLogEntryDTO;
import BFAppProject.dto.NurseLogEntryDTO;
import BFAppProject.models.DiaperLogEntry;
import BFAppProject.models.NurseLogEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class NurseLogEntryService {

    @Autowired
    private final NurseLogEntryRepository nurseLogEntryRepository;

    public NurseLogEntryService(NurseLogEntryRepository nurseLogEntryRepository) {
        this.nurseLogEntryRepository = nurseLogEntryRepository;
    }


    public NurseLogEntry saveNurseLog(NurseLogEntryDTO nurseLogEntryDTO) {

        NurseLogEntry nurseLogEntry = new NurseLogEntry(
                nurseLogEntryDTO.getDate(),
                nurseLogEntryDTO.getIsLeftSide(),
                nurseLogEntryDTO.getLeftStartTime(),
                nurseLogEntryDTO.getLeftStopTime(),
                nurseLogEntryDTO.getIsRightSide(),
                nurseLogEntryDTO.getRightStartTime(),
                nurseLogEntryDTO.getRightStopTime(),
                nurseLogEntryDTO.getLeftSidePositions(),
                nurseLogEntryDTO.getRightSidePositions(),
                nurseLogEntryDTO.getNippleShape(),
                nurseLogEntryDTO.getNippleColoring(),
                nurseLogEntryDTO.getIsHardSpot(),
                nurseLogEntryDTO.getIsBreastRedness(),
                nurseLogEntryDTO.getIsBreastSoft(),
                nurseLogEntryDTO.getIsBreastPain(),
                nurseLogEntryDTO.getMaternalNotes(),
                nurseLogEntryDTO.getIsClickingPresent(),
                nurseLogEntryDTO.getIsInfantSputtering(),
                nurseLogEntryDTO.getIsActiveFeeding(),
                nurseLogEntryDTO.getIsInfantSleepy(),
                nurseLogEntryDTO.getInfantFeedingCues(),
                nurseLogEntryDTO.getInfantNotes(),
                nurseLogEntryDTO.getSessionNotes()
        );

        return nurseLogEntryRepository.save(nurseLogEntry);
    }


    public NurseLogEntryDTO convertToDTO(NurseLogEntry nurseLogEntry) {
        return new NurseLogEntryDTO(
                nurseLogEntry.getId(),
                nurseLogEntry.getDate(),
                nurseLogEntry.getDateCreated(),
                nurseLogEntry.getIsLeftSide(),
                nurseLogEntry.getLeftStartTime(),
                nurseLogEntry.getLeftStopTime(),
                nurseLogEntry.getIsRightSide(),
                nurseLogEntry.getRightStartTime(),
                nurseLogEntry.getRightStopTime(),
                nurseLogEntry.getLeftSidePositions(),
                nurseLogEntry.getRightSidePositions(),
                nurseLogEntry.getNippleShape(),
                nurseLogEntry.getNippleColoring(),
                nurseLogEntry.getIsHardSpot(),
                nurseLogEntry.getIsBreastRedness(),
                nurseLogEntry.getIsBreastSoft(),
                nurseLogEntry.getIsBreastPain(),
                nurseLogEntry.getMaternalNotes(),
                nurseLogEntry.getIsClickingPresent(),
                nurseLogEntry.getIsInfantSputtering(),
                nurseLogEntry.getIsActiveFeeding(),
                nurseLogEntry.getIsInfantSleepy(),
                nurseLogEntry.getInfantFeedingCues(),
                nurseLogEntry.getInfantNotes(),
                nurseLogEntry.getSessionNotes()
        );
    }
}
