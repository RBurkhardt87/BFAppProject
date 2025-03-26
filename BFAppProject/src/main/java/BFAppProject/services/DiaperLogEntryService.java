package BFAppProject.services;

import BFAppProject.data.DiaperLogEntryRepository;
import BFAppProject.dto.DiaperLogEntryDTO;
import BFAppProject.models.DiaperLogEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiaperLogEntryService {

    @Autowired
    private final DiaperLogEntryRepository diaperLogEntryRepository;

    public DiaperLogEntryService(DiaperLogEntryRepository diaperLogEntryRepository) {
        this.diaperLogEntryRepository = diaperLogEntryRepository;
    }


    public DiaperLogEntry saveDiaperLog(DiaperLogEntryDTO diaperLogEntryDTO) {

        DiaperLogEntry diaperLogEntry = new DiaperLogEntry(
                diaperLogEntryDTO.getDate(),
                diaperLogEntryDTO.getTime(),
                diaperLogEntryDTO.getIsPooped(),
                diaperLogEntryDTO.getStoolType(),
                diaperLogEntryDTO.getStoolAmount(),
                diaperLogEntryDTO.getIsUrinated(),
                diaperLogEntryDTO.getUrineType(),
                diaperLogEntryDTO.getUrineAmount(),
                diaperLogEntryDTO.getIsBlowout(),
                diaperLogEntryDTO.getDiaperSize(),
                diaperLogEntryDTO.getDiaperBrand(),
                diaperLogEntryDTO.getIsDiaperRash(),
                diaperLogEntryDTO.getRashSigns(),
                diaperLogEntryDTO.getNotes()
        );

        return diaperLogEntryRepository.save(diaperLogEntry);
    }


    public DiaperLogEntryDTO convertToDTO(DiaperLogEntry diaperLogEntry) {
        return new DiaperLogEntryDTO(
                diaperLogEntry.getId(),
                diaperLogEntry.getDateCreated(),
                diaperLogEntry.getDate(),
                diaperLogEntry.getTime(),
                diaperLogEntry.getPooped(),
                diaperLogEntry.getStoolType(),
                diaperLogEntry.getStoolAmount(),
                diaperLogEntry.getUrinated(),
                diaperLogEntry.getUrineType(),
                diaperLogEntry.getUrineAmount(),
                diaperLogEntry.getBlowout(),
                diaperLogEntry.getDiaperSize(),
                diaperLogEntry.getDiaperBrand(),
                diaperLogEntry.getDiaperRash(),
                diaperLogEntry.getRashSigns(),
                diaperLogEntry.getNotes()
        );
    }
}
