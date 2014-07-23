int piezo = A0;
int thresold = 600;

void setup() {
  Serial.begin(9600);
  pinMode(piezo, INPUT);
}

void loop() {
  int val = analogRead(piezo);
  if (val > thresold) {
    Serial.println('1');
    delay(10000);
  }
}