package com.techelevator.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class Record {

    private int recordId;

    private int userId;

    private String albumName;

    private String albumCover;

    private LocalDate releaseDate;

    private String mediaType;

    private String recordNotes;


    public Record(int recordId, int userId, String albumName, String albumCover, LocalDate releaseDate, String mediaType, String recordNotes) {
        this.recordId = recordId;
        this.userId = userId;
        this.albumName = albumName;
        this.albumCover = albumCover;
        this.releaseDate = releaseDate;
        this.mediaType = mediaType;
        this.recordNotes = recordNotes;
    }

    public Record() {
    }

    public int getRecordId() {
        return recordId;
    }

    public void setRecordId(int recordId) {
        this.recordId = recordId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getAlbumName() {
        return albumName;
    }

    public void setAlbumName(String albumName) {
        this.albumName = albumName;
    }

    public String getAlbumCover() {
        return albumCover;
    }

    public void setAlbumCover(String albumCover) {
        this.albumCover = albumCover;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }

    public String getRecordNotes() {
        return recordNotes;
    }

    public void setRecordNotes(String recordNotes) {
        this.recordNotes = recordNotes;
    }
}
