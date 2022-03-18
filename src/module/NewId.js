export default function newID() {
    // Todo ID 생성
    return Math.random().toString(36).substr(2, 16);
}
