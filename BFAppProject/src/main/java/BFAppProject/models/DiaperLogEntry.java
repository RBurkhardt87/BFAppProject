package BFAppProject.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.Date;

@Entity
public class DiaperLogEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate dateCreated;

    @PrePersist
    protected void onCreate() {
        this.dateCreated = LocalDate.now();
    }

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

    public DiaperLogEntry() {
    }

    public DiaperLogEntry(Date date, String time, Boolean isPooped, String stoolType, String stoolAmount,
                             Boolean isUrinated, String urineType, String urineAmount, Boolean isBlowout, String diaperSize,
                             String diaperBrand, Boolean isDiaperRash, String rashSigns, String note) {
        this.dateCreated = LocalDate.now();
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

    public Boolean getPooped() {
        return isPooped;
    }

    public void setPooped(Boolean pooped) {
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

    public Boolean getUrinated() {
        return isUrinated;
    }

    public void setUrinated(Boolean urinated) {
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

    public Boolean getBlowout() {
        return isBlowout;
    }

    public void setBlowout(Boolean blowout) {
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

    public Boolean getDiaperRash() {
        return isDiaperRash;
    }

    public void setDiaperRash(Boolean diaperRash) {
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
