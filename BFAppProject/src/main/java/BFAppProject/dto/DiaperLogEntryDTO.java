package BFAppProject.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.Date;

public class DiaperLogEntryDTO {

    private Long id;
    private final LocalDate dateCreated;

    @NotNull(message = "You must pick a date")
    private Date date;

    @NotBlank(message = "You must pick a time")
    private String time;

    @JsonProperty("isPooped")
    private Boolean isPooped;
    private String stoolType;
    private String stoolAmount;

    @JsonProperty("isUrinated")
    private Boolean isUrinated;
    private String urineType;
    private String urineAmount;

    @JsonProperty("isBlowout")
    private Boolean isBlowout;
    private String diaperSize;
    private String diaperBrand;

    @JsonProperty("isDiaperRash")
    private Boolean isDiaperRash;
    private String rashSigns;
    private String notes;


    public DiaperLogEntryDTO(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }

    public DiaperLogEntryDTO(Long id, LocalDate dateCreated, Date date, String time, Boolean isPooped, String stoolType, String stoolAmount,
                             Boolean isUrinated, String urineType, String urineAmount, Boolean isBlowout, String diaperSize,
                             String diaperBrand, Boolean isDiaperRash, String rashSigns, String note) {
        this.id = id;
        this.dateCreated = dateCreated;
        this.date = date;
        this.time = time;
        this.isPooped = isPooped;
        this.stoolType = stoolType;
        this.stoolAmount = stoolAmount;
        this.isUrinated = isUrinated;
        this.urineType = urineType;
        this.urineAmount = urineAmount;
        this.isBlowout = isBlowout;
        this.diaperSize = diaperSize;
        this.diaperBrand = diaperBrand;
        this.isDiaperRash = isDiaperRash;
        this.rashSigns = rashSigns;
        this.notes = note;
    }

    public Long getId() {
        return id;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Boolean getIsPooped() {
        return isPooped;
    }

    public void setIsPooped(Boolean pooped) {
        isPooped = pooped;
    }

    public String getStoolType() {
        return stoolType;
    }

    public void setStoolType(String stoolType) {
        this.stoolType = stoolType;
    }

    public String getStoolAmount() {
        return stoolAmount;
    }

    public void setStoolAmount(String stoolAmount) {
        this.stoolAmount = stoolAmount;
    }

    public Boolean getIsUrinated() {
        return isUrinated;
    }

    public void setIsUrinated(Boolean urinated) {
        isUrinated = urinated;
    }

    public String getUrineType() {
        return urineType;
    }

    public void setUrineType(String urineType) {
        this.urineType = urineType;
    }

    public String getUrineAmount() {
        return urineAmount;
    }

    public void setUrineAmount(String urineAmount) {
        this.urineAmount = urineAmount;
    }

    public Boolean getIsBlowout() {
        return isBlowout;
    }

    public void setIsBlowout(Boolean blowout) {
        isBlowout = blowout;
    }

    public String getDiaperSize() {
        return diaperSize;
    }

    public void setDiaperSize(String diaperSize) {
        this.diaperSize = diaperSize;
    }

    public String getDiaperBrand() {
        return diaperBrand;
    }

    public void setDiaperBrand(String diaperBrand) {
        this.diaperBrand = diaperBrand;
    }

    public Boolean getIsDiaperRash() {
        return isDiaperRash;
    }

    public void setIsDiaperRash(Boolean diaperRash) {
        isDiaperRash = diaperRash;
    }

    public String getRashSigns() {
        return rashSigns;
    }

    public void setRashSigns(String rashSigns) {
        this.rashSigns = rashSigns;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }


}
