import { useState } from 'react'
import { MdMusicNote, MdAlbum, MdAccessTime } from 'react-icons/md'
import type { Album } from '../types/music'
import musicData from '../data/music.json'
import styles from './MusicPage.module.css'

const albums: Album[] = musicData

export const MusicPage = () => {
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(albums[0])
    const [activeTrack, setActiveTrack] = useState<number | null>(null)

    return (
        <div className={styles.page}>
            <aside className={styles.sidebar}>
                <h2 className={styles.heading}>Musique</h2>
                <ul className={styles.albumList}>
                    {albums.map(album => (
                        <li
                            key={album.id}
                            className={`${styles.albumItem} ${selectedAlbum?.id === album.id ? styles.albumItemActive : ''}`}
                            onClick={() => { setSelectedAlbum(album); setActiveTrack(null) }}
                        >
                            <div className={styles.albumCover}>
                                {album.cover
                                    ? <img src={album.cover} alt={album.title} />
                                    : <MdAlbum size={28} />
                                }
                            </div>
                            <div className={styles.albumMeta}>
                                <span className={styles.albumTitle}>{album.title}</span>
                                <span className={styles.albumArtist}>{album.artist}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </aside>

            <main className={styles.main}>
                {selectedAlbum && (
                    <>
                        <div className={styles.albumHeader}>
                            <div className={styles.albumHeaderCover}>
                                {selectedAlbum.cover
                                    ? <img src={selectedAlbum.cover} alt={selectedAlbum.title} />
                                    : <MdAlbum size={48} />
                                }
                            </div>
                            <div className={styles.albumHeaderInfo}>
                                <span className={styles.albumGenre}>{selectedAlbum.genre}</span>
                                <h1 className={styles.albumName}>{selectedAlbum.title}</h1>
                                <p className={styles.albumArtistLarge}>{selectedAlbum.artist} · {selectedAlbum.year}</p>
                                <span className={styles.trackCount}>
                                    <MdMusicNote size={14} />
                                    {selectedAlbum.tracks.length} titres
                                </span>
                            </div>
                        </div>

                        <ul className={styles.trackList}>
                            {selectedAlbum.tracks.map((track, index) => (
                                <li
                                    key={track.id}
                                    className={`${styles.trackItem} ${activeTrack === track.id ? styles.trackItemActive : ''}`}
                                    onClick={() => setActiveTrack(track.id)}
                                >
                                    <span className={styles.trackNumber}>
                                        {activeTrack === track.id ? '▶' : index + 1}
                                    </span>
                                    <span className={styles.trackTitle}>{track.title}</span>
                                    <span className={styles.trackDuration}>
                                        <MdAccessTime size={12} />
                                        {track.duration}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </main>
        </div>
    )
}
